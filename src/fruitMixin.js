export const fruitMixin = {
  data(){
    return{

        fruits:["apple","mango","strawberry","banana"],
        filterText:''
    }
  },
  filters:{
    toUppercase(value){
        return value.toUpperCase();
      }

    },
    computed:{
      filteredFruits(){
        return this.fruits.filter((element)=>{
            return element.match(this.filterText);
        });
      }
    }
}
