function ListItems({ array }) {
    console.log(array);
    // const { array } = props;

    return (
        // 리액트에서 Fragment라고 부릅니다
        <>
            {
                array.map((value, index) => {
                    return (
                        <li key={index}>{value}</li>
                    )
                })
                // (() => {
                //     let liarr = [];
                //     for (let i = 0; i < array.length; i++) {
                //         liarr.push(<li>{array[i]}</li>)
                //     }
                //     return liarr;
                // })()
            }
        </>
    )
}
export default ListItems;