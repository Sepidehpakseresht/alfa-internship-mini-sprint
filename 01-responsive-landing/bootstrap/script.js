function validateForm(e){
  const form = e.target;
  const email = form.email.value.trim();
  const name  = form.name.value.trim();
  if(name.length < 2){
    alert("لطفاً نام معتبر وارد کنید.");
    e.preventDefault();
    return false;
  }
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    alert("ایمیل نامعتبر است.");
    e.preventDefault();
    return false;
  }
  alert("فرم با موفقیت ارسال شد (نمونه).");
  e.preventDefault();
  return false;
}
