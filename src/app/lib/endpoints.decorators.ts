

/**
 * @method
 * @param annotation 
 * @description
 * Add url context to all endpoints of class
 * that has this annotation
 */
export function Context(annotation:string) {
  return (target:any) => {
    
  }//return
}//Context





/**
 * @method
 * @param annotation 
 * @description
 * 
 */
export function EndPoint(annotation:string) {
  return (target:any) => {
    let val:string;
    return {
      
      get:function(){
        return val;
      },//get
      
      set:function(value:string){
        val = value;
      }//set
    }//return
  }//return
}//EndPoint