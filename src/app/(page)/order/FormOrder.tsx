"use client"

import { useContext, useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import FormInputCheckout from "@/app/components/Form/FormInputCheckout";
import TitleCheckout from "@/app/components/title/TitleCheckout";
import { FaMoneyBillAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { provinceChoosen } from "../../(actions)/order";
import { SettingProfileContext } from "../layout";

export default function FormOrder() {
    const methodChoosen = useSelector((state: any) => state.orderReducer.methodChoosen);
    const [dataProvince, setDataProvince] = useState([]);
    const dispatchOrder = useDispatch();

    useEffect(() => {
        const fetchProvince = async () => {
            const response = await fetch('https://provinces.open-api.vn/api/');
            const data = await response.json();
            setDataProvince(data);
        };

        fetchProvince();
    }, []);

    const [meeting, setMeeting] = useState(false);
    const [bank, setBank] = useState(false);
    const [dataDistrict, setDataDistrict] = useState([]);
    const [dataWard, setDataWard] = useState([]);

    const settingProfile = useContext(SettingProfileContext);
        
        if (!settingProfile) {
            return null;
        }
    
    const { profile } = settingProfile;

    const handleChangeProvince = async (event: any) => {
        const url = (event.target.value.split('+'))[0];
        const response = await fetch(`https://provinces.open-api.vn/api/p/${url}?depth=2`);
        const data = await response.json();
        setDataDistrict(data.districts);
        dispatchOrder(provinceChoosen(true));
    }

    const handleChangeDistrict = async (event: any) => {
        const url = (event.target.value.split('+'))[0];
        const response = await fetch(`https://provinces.open-api.vn/api/d/${url}?depth=2`);
        const data = await response.json();
        setDataWard(data.wards);
    }

    

    const handleRadioMeetingChange = (event: any) => {
        if (event.target.checked) {
            setMeeting(true);
            setBank(false);
        }
    };

    const handleRadioBankChange = async (event: any) => {
        if (event.target.checked) {
            setBank(true);
            setMeeting(false);
        }
    };

    const handleClickBank = () => {
        setBank(true);
        setMeeting(false);
    }

    const handleClickMetting = () => {
        setMeeting(true);
        setBank(false);
    }

    return (
        <>
            <div className="w-full grid grid-cols-2 gap-[28px]">
                <div className="">
                    <TitleCheckout text="Thông tin nhận hàng" />
                    {profile.email !== "" ? (
                        <FormInputCheckout label="Email" type="email" name="email" id="email" required value={profile.email}/>
                    ) : (
                        <FormInputCheckout label="Email" type="email" name="email" id="email" required/>
                    )}
                    {profile.firstName !== "" ? (
                        <FormInputCheckout label="Họ" name="firstName" id="firstName" required value={profile.firstName}/>
                    ) : (
                        <FormInputCheckout label="Họ" name="firstName" id="firstName" required/>
                    )}
                    {profile.lastName !== "" ? (
                        <FormInputCheckout label="Tên" name="lastName" id="lastName" required value={profile.lastName}/>
                    ) : (
                        <FormInputCheckout label="Tên" name="lastName" id="lastName" required/>
                    )}
                    {profile.phone !== "" ? (
                        <FormInputCheckout label="Số điện thoại (tùy chọn)" name="phone" id="phone" value={profile.phone}/>
                    ) : (
                        <FormInputCheckout label="Số điện thoại (tùy chọn)" name="phone" id="phone"/>
                    )}
                    {profile.address !== "" ? (
                        <FormInputCheckout label="Địa chỉ (tùy chọn)" name="address" id="address" value={profile.address}/>
                    ) : (
                        <FormInputCheckout label="Địa chỉ (tùy chọn)" name="address" id="address"/>
                    )}
                    <div className="relative">
                        <label htmlFor="province" className="text-[13px] font-[300] text-[#999] absolute top-[5px] left-[11px]">Tỉnh thành</label>
                        <select
                            name="province"
                            id="province"
                            className="pt-[16px] pb-[2px] px-[11px] w-full h-[44px] bg-white text-[#333] rounded-[4px] border border-solid border-[#d9d9d9] focus:border-[#72a834] outline-none input-checkout mb-[10px] text-[14px] font-[450] cursor-pointer appearance-none"
                            onChange={handleChangeProvince}
                        >
                            <option value="">---</option>
                            {dataProvince.length > 0 && dataProvince.map((item: any, index: number) => (
                                <option key={index} value={`${item.code}+${item.name}`}>{item.name}</option>
                            ))}
                        </select>
                        <label htmlFor="province">
                            <FaCaretDown className="cursor-pointer text-[#878787] pl-[10px] py-[2px] text-[20px] absolute right-[11px] top-[12px] border-l border-solid border-[#D9D9D9]" />
                        </label>
                    </div>
                    <div className="relative">
                        <label htmlFor="district" className="text-[13px] font-[300] text-[#999] absolute top-[5px] left-[11px]">Quận huyện</label>
                        <select
                            name="district"
                            id="district"
                            className={"pt-[16px] pb-[2px] px-[11px] w-full h-[44px] text-[#333] rounded-[4px] border border-solid border-[#d9d9d9] focus:border-[#72a834] outline-none input-checkout mb-[10px] text-[14px] font-[450] cursor-pointer appearance-none " + (dataDistrict.length > 0 ? "bg-white" : "bg-[#EEEEEE]")}
                            onChange={handleChangeDistrict}
                            disabled={(dataDistrict.length > 0 ? false : true)}
                        >
                            <option value="">---</option>
                            {dataDistrict.length > 0 && dataDistrict.map((item: any, index: number) => (
                                <option key={index} value={`${item.code}+${item.name}`}>{item.name}</option>
                            ))}
                        </select>
                        <label htmlFor="district">
                            <FaCaretDown className="cursor-pointer text-[#878787] pl-[10px] py-[2px] text-[20px] absolute right-[11px] top-[12px] border-l border-solid border-[#D9D9D9]" />
                        </label>
                    </div>
                    <div className="relative">
                        <label htmlFor="ward" className="text-[13px] font-[300] text-[#999] absolute top-[5px] left-[11px]">Phường xã</label>
                        <select
                            name="ward"
                            id="ward"
                            className={"pt-[16px] pb-[2px] px-[11px] w-full h-[44px] text-[#333] rounded-[4px] border border-solid border-[#d9d9d9] focus:border-[#72a834] outline-none input-checkout mb-[10px] text-[14px] font-[450] cursor-pointer appearance-none " + (dataWard.length > 0 ? "bg-white" : "bg-[#EEEEEE]")}
                            disabled={(dataWard.length > 0 ? false : true)}
                        >
                            <option value="">---</option>
                            {dataWard.map((item: any, index: number) => (
                                <option key={index} value={`${item.code}+${item.name}`}>{item.name}</option>
                            ))}
                        </select>
                        <label htmlFor="ward">
                            <FaCaretDown className="cursor-pointer text-[#878787] pl-[10px] py-[2px] text-[20px] absolute right-[11px] top-[12px] border-l border-solid border-[#D9D9D9]" />
                        </label>
                    </div>
                </div>
                <div>
                    <TitleCheckout text="Vận chuyển" />
                    {dataDistrict.length <= 0 ? (
                        <input
                            placeholder="Vui lòng nhập thông tin giao hàng"
                            className="py-[10px] px-[18px] w-full h-[44px] bg-[#d1ecf1] placeholder:text-[#0c5460] rounded-[4px] border border-solid border-[#bee5eb] outline-none mb-[30px] text-[14px] font-[450]"
                        />
                    ) : (
                        <div className="relative">
                            <input
                                placeholder="Giao hàng tận nơi"
                                className="py-[10px] px-[45px] w-full h-[44px] bg-white rounded-[4px] border border-solid outline-none mb-[30px] text-[14px] placeholder:text-[#545454] font-[450] cursor-pointer"
                            />
                            <span className="cursor-pointer absolute left-[15px] top-[12px] w-[18px] aspect-square rounded-[50%] bg-[#3072AC]"></span>
                            <span className="text-[14px] font-[450] text-[#545454] absolute top-[10px] right-[15px]">40.000<sup className="underline">đ</sup></span>
                        </div>
                    )}
                    <TitleCheckout text="Thanh toán" />
                    {methodChoosen == false && (
                        <input
                            placeholder="Bạn cần chọn phương thức thanh toán"
                            className="py-[10px] px-[18px] w-full h-[44px] bg-[#f8d7da] placeholder:text-[#721c24] rounded-[4px] border border-solid border-[#f5c6cb]
outline-none mb-[20px] text-[14px] font-[450]"
                        />
                    )}
                    <div className="relative">
                        <div onClick={() => handleClickBank()}>
                            <input
                                placeholder="Chuyển khoản"
                                className="py-[30px] px-[45px] w-full h-[44px] bg-white rounded-[4px] rounded-bl-none rounded-br-none border border-solid outline-none text-[14px] placeholder:text-[#545454] font-[450] cursor-pointer"
                            />
                        </div>
                        <input type="radio" className="hidden" id="bank" name="method" value="QR" onChange={handleRadioBankChange} />
                        {bank ? (
                            <label htmlFor="bank" className="cursor-pointer absolute left-[15px] top-[22px] w-[18px] aspect-square rounded-[50%] bg-[#3072AC]"></label>
                        ) : (
                            <label htmlFor="bank" className="cursor-pointer absolute left-[15px] top-[22px] w-[18px] aspect-square rounded-[50%] border border-solid border-[#d9d9d9]"></label>
                        )}
                        <FaMoneyBillAlt className="absolute top-[16px] right-[30px] text-[30px] text-[#1990c6]" />
                    </div>
                    <div className="relative">
                        <div onClick={() => handleClickMetting()}>
                            <input
                                placeholder="Thanh toán khi nhận hàng"
                                className="py-[30px] px-[45px] w-full h-[44px] bg-white rounded-[4px] rounded-tl-none rounded-tr-none border border-solid border-t-0 outline-none text-[14px] placeholder:text-[#545454] font-[450] cursor-pointer"
                            />
                        </div>
                        <input type="radio" className="hidden" id="meeting" name="method" value="CAST" onChange={handleRadioMeetingChange} />
                        {meeting ? (
                            <label htmlFor="meeting" className="cursor-pointer absolute left-[15px] top-[22px] w-[18px] aspect-square rounded-[50%] bg-[#3072AC]"></label>
                        ) : (
                            <label htmlFor="meeting" className="cursor-pointer absolute left-[15px] top-[22px] w-[18px] aspect-square rounded-[50%] border border-solid border-[#d9d9d9]"></label>
                        )}
                        <FaMoneyBillAlt className="absolute top-[16px] right-[30px] text-[30px] text-[#1990c6]" />
                    </div>
                </div>
            </div>
        </>
    )
}