// URL에서 쿼리 파라미터 추출
const urlParams = new URLSearchParams(window.location.search);
const u_id = urlParams.get('u_id'); // u_id 값 추출

// JSON 파일에서 데이터 가져오기
fetch('../Data/Chef.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('JSON 파일을 불러오는 중 오류가 발생했습니다.');
        }
        return response.json();
    })
    .then(data => {
        // u_id와 일치하는 객체 찾기
        const selectedData = data.find(item => item.u_id === u_id);

        // img 태그에 empty_image 값 추가
        if (selectedData) {
            const imgElement = document.getElementById('img-empty-image');
            imgElement.src = selectedData.empty_image;

            const nameElement = document.getElementById('p-chef-name');
            nameElement.innerHTML = selectedData.name;
            const cookTypeElement = document.getElementById('p-chef-cook-type');
            cookTypeElement.innerHTML = selectedData.cook_type;
            const sayingElement = document.getElementById('p-chef-saying');
            sayingElement.innerHTML = selectedData.saying;
            
            // 음식 정보를 div-cook-item-list에 추가
            const foodListContainer = document.getElementById('div-cook-item-list');

            selectedData['food-info'].forEach((food) => {
                // 음식 정보를 위한 div 생성
                const foodItemDiv = document.createElement('div');
                foodItemDiv.id = 'div-cook-item-container';

                // 음식 제목 p 태그
                const foodTitle = document.createElement('p');
                foodTitle.id = 'p-cook-item-title';
                foodTitle.innerHTML = food['food-name'].replace(/\n/g, '<br/>'); // '\n'을 '<br/>'로 변환

                // 음식 링크 a 태그
                const foodLink = document.createElement('a');
                foodLink.id = 'img-cook-item-a-href';
                foodLink.href = food['food-video']; // food-video 값 추가
                foodLink.target = '_blank'; // 새 탭에서 열리도록 설정

                // 음식 이미지 img 태그
                const foodImage = document.createElement('img');
                foodImage.id = 'img-cook-item-image';
                foodImage.src = food['food-image'];

                // a 태그에 img 태그 추가
                foodLink.appendChild(foodImage);

                // div에 자식 요소 추가
                foodItemDiv.appendChild(foodTitle);
                foodItemDiv.appendChild(foodLink);

                // foodListContainer에 추가
                foodListContainer.appendChild(foodItemDiv);
            });
                
            const storyImageElement = document.getElementById('img-story-item');
            storyImageElement.src = selectedData.story_image;

            const storyContentElement = document.getElementById('p-story-content');
            storyContentElement.innerHTML = selectedData.story_content;

            const restaurantTypeElement = document.getElementById('p-restaurant-type');
            restaurantTypeElement.innerHTML = selectedData.restaurant_type;
            const restaurantNameElement = document.getElementById('p-restaurant-name');
            restaurantNameElement.innerHTML = selectedData.restaurant_name;
            const restaurantTimeElement = document.getElementById('p-restaurant-time');
            restaurantTimeElement.innerHTML = selectedData.restaurant_time;
            const restaurantPhoneElement = document.getElementById('p-restaurant-phone');
            restaurantPhoneElement.innerHTML = selectedData.restaurant_phone;

            const restaurantPlaceElement = document.getElementById('p-restaurant-place');
            restaurantPlaceElement.innerHTML = selectedData.restaurant_place;
            
            const restaurantPlaceUrlElement = document.getElementById('div-restaurant-place-map');
            const restaurantReservationUrlElement = document.getElementById('a-restaurant-reservation_url');
            const restaurantSnsUrlElement = document.getElementById('a-restaurant-sns_url');
            if (selectedData.restaurant_place_url === "") {
                restaurantPlaceUrlElement.innerHTML = `<div style = "width : 640px; height : 360px; background-color : gray; display : flex; justify-content : center; align-items : center; font-size : 25px; font-family : 'BMHANNAPro'">국내가 아닙니다</div>`
            } else {
                restaurantPlaceUrlElement.innerHTML = `<div id=${selectedData.restaurant_place_url[0]} class="root_daum_roughmap root_daum_roughmap_landing"></div>`;
            }
            if (selectedData.restaurant_reservation_url === "") {
                restaurantReservationUrlElement.innerHTML = `<img src="../images/none.png" alt="예약" id = "img-icon"/><p id = "p-restaurant-info2-href-name">예약 방법이 없습니다.</p>`;
                restaurantSnsUrlElement.innerHTML = `<img src="../images/none.png" alt="예약" id = "img-icon"/><p id = "p-restaurant-info2-href-name">SNS 프로필이 없습니다.</p>`
            } else {
                restaurantReservationUrlElement.href = selectedData.restaurant_reservation_url;
                restaurantSnsUrlElement.href = selectedData.restaurant_sns_url;
            }
            


            new daum.roughmap.Lander({
                "timestamp" : selectedData.restaurant_place_url[1],
                "key" : selectedData.restaurant_place_url[2], 
                "mapWidth" : "640",
                "mapHeight" : "360"
                }).render();
            



            
        } else {
            console.error('u_id에 해당하는 데이터를 찾을 수 없습니다.');
        }
    })
    .catch(error => {
        console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
    });

    
