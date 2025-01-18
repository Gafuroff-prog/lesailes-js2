function buy() {
    let price = parseInt(prompt("Qiyqiriq set nechta zakaz qilasiz?"));

    switch (price) {
        case 1:
            alert("Siz 1 ta set zakaz qildingiz.\nNarxi: 45.000 so'm");
            break;
        case 2:
            alert("Siz 2 ta set zakaz qildingiz.\nNarxi: 90.000 so'm");
            break;
        case 3:
            alert("Siz 3 ta set zakaz qildingiz.\nNarxi: 135.000 so'm");
            break;
        case 4:
            alert("Siz 4 ta set zakaz qildingiz.\nNarxi: 180.000 so'm");
            break;
        default:
            alert("Siz ko‘p buyurtma berdingiz, buni amalga oshirish imkoni yo‘q.");
    }
}


