import {makeAutoObservable} from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      {id: 1, name: 'Holodylnik'},
      {id: 2, name: 'Smartfony'},
      {id: 3, name: 'Laptopy'},
      {id: 4, name: 'TV'}
    ]
    this._brands = [ 
      {id: 1, name: "Samsung"},
      {id: 2, name: "Apple"},
      {id: 3, name: "Lenovo"},
      {id: 4, name: "Asus"}
    ]
    this._devices = [
      {id: 1, name: "Iphone 12 pro", price: 11000, rating: 3, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`},
      {id: 2, name: "Iphone 12 pro", price: 11000, rating: 3, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`},
      {id: 3, name: "Iphone 12 pro", price: 11000, rating: 3, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`},
      {id: 4, name: "Iphone 12 pro", price: 11000, rating: 3, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`},
      {id: 5, name: "Iphone 12 pro", price: 11000, rating: 3, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`},
      {id: 6, name: "Iphone 12 pro", price: 11000, rating: 3, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`},
      {id: 7, name: "Iphone 12 pro", price: 11000, rating: 3, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`},
    ]
    
    this._selectedType = {}
    this._selectedBrand = {}
    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }
  setBrands(brands) {
    this._brands = brands
  }
  setDevices(devices) {
    this._devices = devices
  }

  setSelectedType(type) {
    this.setPage(1)
    this._selectedType = type
  }
  setSelectedBrand(brand) {
      this.setPage(1)
      this._selectedBrand = brand
  }
  setPage(page) {
      this._page = page
  }
  setTotalCount(count) {
      this._totalCount = count
  }


  get types() {
    return this._types
  }
  get brands() {
    return this._brands
  }
  get devices() {
    return this._devices
  }
  get selectedType() {
    return this._selectedType
  }
  get selectedBrand() {
    return this._selectedBrand
  }
  get totalCount() {
    return this._totalCount
  }
  get page() {
    return this._page
  }
  get limit() {
    return this._limit
  }
}