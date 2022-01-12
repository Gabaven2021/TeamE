window.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('#filterBtn').addEventListener('click',()=>{
      var r1=document.querySelectorAll('[name="cat[sta][]"]:checked');
      var r2=document.querySelector('[name="cat[day][]"]:checked');
      var r3=document.querySelector('[name="cat[time][]"]:checked');
      var r4=document.querySelector('[name="cat[co][]"]:checked');
      var r5=document.querySelector('[name="cat[pla][]"]:checked');
      document.querySelectorAll('.filter-items li[data-filter-key]').forEach(x=>{
        var flgs=[];
        var keys=x.dataset["filterKey"].split(" ");
        if(r1.length>0){
          flgs.push(keys.some(x=>[...r1].map(x=>x.value).includes(x)));
        }
        if(r2!=null){
          flgs.push(keys.includes(r2.value));
        }
        if(r3!=null){
          flgs.push(keys.includes(r3.value));
        }
        if(r4!=null){
          flgs.push(keys.includes(r4.value));
        }
        if(r5!=null){
          flgs.push(keys.includes(r5.value));
        }
        x.classList.toggle('hide',flgs.includes(false));
      });
    });
  });
