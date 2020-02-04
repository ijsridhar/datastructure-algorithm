class customArray {

  constructor(){
    this.length = 0
    this.data = {}
  }

  _get(){
    const array = Object.values( this.data )
    return array
  }

  _push( item ){
    if( item !== ( null && "" && undefined )  ){
      this.data[ this.length ] = item
      this.length++
      const array = Object.values( this.data )
      return array
    }else{
      return ""
    }
  }

  _shiftItem ( index ) {
    for ( let i = index; i < this.length; i++ ){
        this.data[ i ] = this.data[ i + 1 ]
      }
  }

  _delete( item ){
    if( typeof( item ) == "number" ){

      delete this.data[ item ]
      this._shiftItem( item )
      delete this.data[ this.length - 1 ]
      const array = Object.values( this.data )
      return array

    }else if( typeof( item ) == "string" ){

      let index 
      for( let i = 0; i < this.length; i++ ){
        if( this.data[i] == item ){
          index = i
          delete this.data[i]
        }
      }
      if( index ){
        this._shiftItem( item )
      }
      const array = Object.values( this.data )
      return array

    }else{
      
      return ""

    }
  }

  //TODO sort, reduce, findIndexOfItem,

}

const customArray = new customArray()

customArray._push( 'Sridhar' )
customArray._push( 'Janardhan' )
customArray._push( 'Appytechie' )
customArray._delete( 1 )