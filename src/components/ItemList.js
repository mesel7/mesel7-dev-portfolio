import "./ItemList.css";

const ItemList = ({ data, RenderItem }) => {
    return (
        <div className="item-list">
            {data.map((it, idx) => <RenderItem key={idx} {...it} />)}
        </div>
    );
};

export default ItemList;