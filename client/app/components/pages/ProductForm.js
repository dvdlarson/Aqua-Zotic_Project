import React,{Component} from 'react';

class ProductForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        product_code: 'Enter Code',
        category:'Freshwater',
        description:'Enter description',
        cost:0.00,
        price:0.00,
        qty_on_hand:0,
        is_active : false,
        file:'',
        files:[]

      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleFiles = this.handleFiles.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(event);
        const data = new FormData(event.target);
        console.log(data);
       // addProduct(data);
    }

    handleFiles(event) {
      event.preventDefault();
      const files=event.files;
      this.setState({
        files:files
      })
      if (!files.length) {
        thumbnail.innerHTML = "<p>No files selected!</p>";
      } else {
        thumbnail.innerHTML = "";
        let list = document.createElement("ul");
        thumbnail.appendChild(list);
        
          let li = document.createElement("li");
          list.appendChild(li);
          
          let img = document.createElement("img");
          img.src = window.URL.createObjectURL(files);
          img.height = 100;
          img.onload = function() {
            window.URL.revokeObjectURL(this.src);
          }
          li.appendChild(img);
          var info = document.createElement("span");
          info.innerHTML = files.name + ": " + files.size + " bytes";
          li.appendChild(info);
        
      }
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          
          <label>
            Category:
            <input
              name="category"
              type="select"
              value={['Freshwater', 'Saltwater','Dry_Goods']}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Product Code:
            <input
              name="product_code"
              type="text"
              value={this.state.product_code}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Description:
            <input
              name="product_code"
              type="text"
              value={this.state.description}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Cost (Wholesale):
            <input
              name="product_code"
              type="Number"
              value={this.state.cost}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Sell Price:
            <input
              name="price"
              type="Number"
              value={this.state.price}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Quantity on Hand:
            <input
              name="qty_on_hand"
              type="Number"
              value={this.state.qty_on_hand}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Active:
            <input
              name="is_active"
              type="checkbox"
              checked={this.state.is_active}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label> 
          Add Photo:
          <input type="file" id="fileElem" accept="image/*" onChange={this.handleFiles}/>
          </label>
          <div className="thumbnail">
            <p>Preview - No photo selected</p>
          </div>

          <br />
          <button className='btn btn-secondary'>Submit</button>
        </form>
      );
    }
  }
  
  

  export default ProductForm;