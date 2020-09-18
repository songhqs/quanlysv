function modal (){
    return (
        <div className="modal">
            <div classNmae='btn-container'>
                <h3> bạn có muốn xóa<span>{products.id}</span>?</h3>
                        <button onClick={closeModal}>Không</button>
                        <button onClick={() => deleteProduct(products.id)}>Có</button>
                    </div>
        </div>
    )
}