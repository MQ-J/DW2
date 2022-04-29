export function CPF (value) {
    return value.replace(/\D/g,'').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})/, '$1-$2').replace(/(-\d{2})\d+?$/, '$1')
  }
  

export function validaCPF (value) {
    const test = 0
    
    //test = value -1
    alert(test)
    
    if(test == 0) {
      return "sim"
    } else {
      return "não"
    }
}
