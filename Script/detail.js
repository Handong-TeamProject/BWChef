const urlParams = new URLSearchParams(window.location.search);
const u_id = urlParams.get('u_id'); 

fetch('../Data/Chef.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('JSON 파일을 불러오는 중 오류가 발생했습니다.');
        }
        return response.json();
    })
    .then(data => {
        const selectedData = data.find(item => item.u_id === u_id);

        if (selectedData) {
            const imgElement = document.getElementById('img-empty-image');
            imgElement.src = selectedData.empty_image;

            const nameElement = document.getElementById('p-chef-name');
            nameElement.innerHTML = selectedData.name;
            const cookTypeElement = document.getElementById('p-chef-cook-type');
            cookTypeElement.innerHTML = selectedData.cook_type;
            const sayingElement = document.getElementById('p-chef-saying');
            sayingElement.innerHTML = selectedData.saying;
            
            const foodListContainer = document.getElementById('div-cook-item-list');

            selectedData['food-info'].forEach((food) => {
                const foodItemDiv = document.createElement('div');
                foodItemDiv.id = 'div-cook-item-container';

                const foodTitle = document.createElement('p');
                foodTitle.id = 'p-cook-item-title';
                foodTitle.innerHTML = food['food-name'].replace(/\n/g, '<br/>');


                const foodLink = document.createElement('a');
                foodLink.id = 'img-cook-item-a-href';
                foodLink.href = food['food-video']; 
                foodLink.target = '_blank'; 

                const foodImage = document.createElement('img');
                foodImage.id = 'img-cook-item-image';
                foodImage.src = food['food-image'];

                foodLink.appendChild(foodImage);
                foodItemDiv.appendChild(foodTitle);
                foodItemDiv.appendChild(foodLink);

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

    
