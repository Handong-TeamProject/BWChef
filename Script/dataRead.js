fetch('../Data/Chef.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('JSON 파일을 불러오는 중 오류가 발생했습니다.');
        }
        return response.json();
    })
    .then(data => {
        const whiteContainer = document.getElementById("white-container");
        const blackContainer = document.getElementById("black-container");

        const whiteData = data.slice(4);
        const blackData = data.slice(0, 4);

        whiteData.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.id = "div-chef-card";
            itemDiv
                .classList
                .add("card");

            itemDiv.innerHTML = `
                <a href="./DetailPage.html?u_id=${item.u_id}"><img src="${item.image}" id="image-chef"/></a>
            `;

            whiteContainer.appendChild(itemDiv);
        });

        blackData.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.id = "div-chef-card";
            itemDiv
                .classList
                .add("card");

            itemDiv.innerHTML = `
                <a href="./DetailPage.html?u_id=${item.u_id}"><img src="${item.image}" id="image-chef"/></a>
            `;

            blackContainer.appendChild(itemDiv);
        });
    })
    .catch(error => {
        console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
    });
