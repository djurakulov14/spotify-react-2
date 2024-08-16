function Card({item}) {
    return (
        <div className="card" style={{backgroundColor: item.color}}>
            <h1>{item.name}</h1>
            <img src={item.img} alt="img" />
        </div>
    );
}

export default Card;