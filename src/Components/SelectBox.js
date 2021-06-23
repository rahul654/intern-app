import React from "react";

function SelectBox(props) {
  return (
    <div className="pagetwo__main_product_details_info_inputs">
      <div className="pagetwo__main_product_details_input_head">
        {props.name}
      </div>
      <span className="pagetwo__main_product_details_info_inputs_top_right"> {props.topright} </span>
      <select
        className="pagetwo__main_product_details_info_select"
      >
        {props.options?.map((option, index) => (
          <option value={option.value} key={`option${index}`}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectBox;
