export const exercisefour = {
  computed:{

    exerciseone(){
      let splitString = this.textInputOne.split("");
      let reverseArray = splitString.reverse();
      let joinArray= reverseArray.join("");
      return joinArray;
    },
    exercisetwo(){
      let length = this.textInputTwo.length;
      return this.textInputTwo+" ("+length+") ";
    }
  }
}
