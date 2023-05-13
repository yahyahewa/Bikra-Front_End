import React, { useState, useEffect } from "react";
import { useGetProductOfUsersQuery } from "../../app/api/productEndPoint";
import Card from "./Card";
import Loading from "../Loading";
import { useSelector } from "react-redux";
function ProductPanel() {
  const [userId, setUserId] = useState();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    setUserId(user?._id);
  }, [user]);
  // setUserId({ _id: user?._id });
  const { data, isError, isLoading } = useGetProductOfUsersQuery(userId);
  // const data = [];
  return (
    <div className="w-full">
      <div className={`w-full`}></div>
      {isError ? `` : isLoading ? <Loading /> : <Card data={data?.data} />}
    </div>
  );
}

export default ProductPanel;
