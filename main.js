function expand(n){
    document.querySelector(".sub." + n[0]).classList.add("active")
    document.querySelector(".main." + n[0]).setAttribute("onclick", "shrink(this.classList)")
    document.querySelector(".icon." + n[0]).style.cssText = "background: url(assets/images/icon-minus.svg)"
}

function shrink(n) {
    document.querySelector(".sub." + n[0]).classList.remove("active")
    document.querySelector(".main."+n[0]).setAttribute("onclick","expand(this.classList)")
    document.querySelector(".icon." + n[0]).style.cssText = "background: url(assets/images/icon-plus.svg)"
}