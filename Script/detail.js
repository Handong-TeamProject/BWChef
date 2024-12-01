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
        } else {
            console.error('u_id에 해당하는 데이터를 찾을 수 없습니다.');
        }
    })
    .catch(error => {
        console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
    });
