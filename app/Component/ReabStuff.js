import React from 'react';
import Image from "next/image";
import kups from "../../public/ProductImg/Kostil_UPS.jpg";
import k2 from "../../public/ProductImg/Kostil2.jpg";
import k3 from "../../public/ProductImg/Kostil3.jpg";
import hmain from "../../public/ProductImg/HodunkiMain.jpg";
import hmain2 from "../../public/ProductImg/HodunkiSklad.jpg";
import hmain3 from "../../public/ProductImg/HodunkiKolesaSklad_w_trans.png";

const ReabStuff = () => {
    return (
        <div>

            <div className="grid  sm:grid-cols-3 grid-cols-1 gap-4 flex  ">

                <div className="bg-transparent w-auto h-auto p-4 border rounded shadow hover:border-2 hover:border-blue-500 transition duration-200 ">
                    <Image src={kups} width="200" height="200" alt="Костыли с устройством против скольжения" ></Image>
                    <h2 className="text-xl font-bold mb-2">Костыли с устройством против скольжения</h2>
                    <p className="text-gray-600"><b>Продажа:</b> 2 490 ₽ </p>
                    <p className="text-gray-600"><b>Прокат:</b> 490 ₽ \ месяц</p>
                </div>
                <div className="p-4 border rounded shadow hover:border-2 hover:border-blue-500 transition duration-200">
                    <Image src={k2} width="200" height="200" alt="Костыли металлические"   ></Image>
                    <h2 className="text-xl font-bold mb-2">Костыли металлические</h2>
                    <p className="text-gray-600"><b>Продажа:</b> 1 980 ₽ </p>
                    <p className="text-gray-600"><b>Прокат:</b> 390 ₽ \ месяц</p>
                </div>
                <div className="p-4 border rounded shadow hover:border-2 hover:border-blue-500 transition duration-200">
                    <Image src={k3} width="250" height="250" alt="Костыли локевые"   ></Image>
                    <h2 className="text-xl font-bold mb-2">Костыли локевые</h2>
                    <p className="text-gray-600"><b>Продажа:</b> 2 490 ₽  </p>
                    <p className="text-gray-600"><b>Прокат:</b> 490 ₽ \ месяц</p>
                </div>
                <div className="p-4 border rounded shadow hover:border-2 hover:border-blue-500 transition duration-200">
                    <Image src={hmain} width="200" height="200" alt="Ходунки складные"    ></Image>
                    <h2 className="text-xl font-bold mb-2">Ходунки складные</h2>
                    <p className="text-gray-600"><b>Продажа:</b> 2 990 ₽  </p>
                    <p className="text-gray-600"><b>Прокат:</b> 490 ₽ \ месяц</p>
                </div>

                <div className="p-4 border rounded shadow hover:border-2 hover:border-blue-500 transition duration-200">
                    <Image src={hmain2} width="200" height="200" alt="Ходунки складные"    ></Image>
                    <h2 className="text-xl font-bold mb-2">Ходунки складные</h2>
                    <p className="text-gray-600"><b>Продажа:</b>  3 990 ₽  </p>
                    <p className="text-gray-600"><b>Прокат:</b> 590 ₽ \ месяц</p>
                </div>

                <div className="p-4 border rounded shadow hover:border-2 hover:border-blue-500 transition duration-200">
                    <Image src={hmain3} width="200" height="200" alt="Ходунки складные на колесах"    ></Image>
                    <h2 className="text-xl font-bold mb-2">Ходунки складные на колесах</h2>
                    <p className="text-gray-600"><b>Продажа:</b> 4 290 ₽  </p>
                    <p className="text-gray-600"><b>Прокат:</b> 690 ₽ \ месяц</p>
                </div>


            </div>
        </div>
    );
};

export default ReabStuff;