const generatorRandomText = (num) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let text = "";
  const length = num || 10; // Sử dụng num nếu có, nếu không thì mặc định là 10

  for (let index = 0; index < length; index++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    text += characters[randomIndex]; // Lấy ký tự ngẫu nhiên
  }

  return text.toUpperCase(); // Trả về chuỗi chữ in hoa
};

module.exports = generatorRandomText;
