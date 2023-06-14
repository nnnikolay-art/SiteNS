import Image from "next/image";
import logoImg from '../../public/1.jpg'

const   Logo = () => (
    <Image
        src={logoImg} // замените на путь к своему изображению логотипа
        alt="Логотип компании"
        width={3000}
        height={3000}
        className="w-24 h-24" // задайте размер и другие стили для своего логотипа
    />
);

export default Logo;