import React,{memo} from "react";

function View({ data,typeData }) {



    console.log(typeData+' View is rendering')
  return <div>{data}</div>;
}

export default memo(View);
