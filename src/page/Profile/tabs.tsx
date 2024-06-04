import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "../Profile/profile.scss";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: (
      <>
        <div className="overeview">
          <p className="text_profile">Trang chủ</p>
        </div>
      </>
    ),
    children: (
      <>
        <div className="overeview">
          <p className="text_profile_in">Thong tin tong quan</p>
        </div>
      </>
    ),
  },
  {
    key: "2",
    label: (
      <>
        <div className="overeview">
          <p className="text_profile">Lịch sử mua hàng</p>
        </div>
      </>
    ),
    children: (
      <>
        <div className="overeview">
          <p className="text_profile_in">Lich su mua Hang</p>
        </div>
      </>
    ),
  },
  {
    key: "3",
    label: (
      <>
        <div className="overeview">
          <p className="text_profile">Tra cứu bảo hành</p>
        </div>
      </>
    ),
    children: (
      <>
        <div className="overeview">
          <p className="text_profile_in">Tra cuu bao hanh</p>
        </div>{" "}
      </>
    ),
  },
  {
    key: "4",
    label: (
      <>
        <div className="overeview">
          <p className="text_profile">Ưu đãi của bạn</p>
        </div>
      </>
    ),
    children: (
      <>
        <div className="overeview">
          <p className="text_profile_in">Uu dai cua ban</p>
        </div>{" "}
      </>
    ),
  },
  {
    key: "5",
    label: (
      <>
        <div className="overeview">
          <p className="text_icon_new">Mới</p>
          <p className="text_profile_5">Chương trình M-Student</p>
        </div>
      </>
    ),
    children: (
      <>
        <div className="overeview">
          <p className="text_profile_in">Chuong trinh M-student</p>
        </div>{" "}
      </>
    ),
  },
  {
    key: "6",
    label: (
      <>
        <div className="overeview">
          <p className="text_profile">Hạng thành viên</p>
        </div>
      </>
    ),
    children: (
      <>
        <div className="overeview">
          <p className="text_profile_in">Hang thanh vien</p>
        </div>{" "}
      </>
    ),
  },
  {
    key: "7",
    label: (
      <>
        <div className="overeview">
          <p className="text_profile">Tài khoản của bạn</p>
        </div>
      </>
    ),
    children: (
      <>
        <div className="overeview">
          <p className="text_profile_in">Tai khoan cua ban</p>
        </div>
      </>
    ),
  },
  {
    key: "8",
    label: (
      <>
        <div className="overeview">
          <p className="text_profile">Hỗ trợ</p>
        </div>
      </>
    ),
    children: (
      <>
        <div className="overeview">
          <p className="text_profile_in">Ho tro</p>
        </div>{" "}
      </>
    ),
  },
  {
    key: "9",
    label: (
      <>
        <div className="overeview">
          <p className="text_profile">Góp ý - Phản hồi</p>
        </div>
      </>
    ),
    children: (
      <>
        <div className="overeview">
          <p className="text_profile_in">Phan hoi</p>
        </div>{" "}
      </>
    ),
  },
  {
    key: "10",
    label: (
      <>
        <div className="overeview">
          <p className="text_profile">Thoát tài khoản</p>
        </div>
      </>
    ),
    children: (
      <>
        <div className="overeview">
          <p className="text_profile_in">Thoat tai khoan</p>
        </div>{" "}
      </>
    ),
  },
];

const App: React.FC = () => (
  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
);

export default App;
