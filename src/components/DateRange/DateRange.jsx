const DateRange = () => {
    return(
        <DateRangePicker
        onChange={(item) => {
          console.log("item.selection : ", item.selection),
            setState([item.selection]);
        }}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="horizontal"
      />  
    );
}

export default DateRange;