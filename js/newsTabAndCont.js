window.onload = function() {
    tabClick()
    toggleContent()
}

function tabClick() {
    let tab = document.querySelectorAll(".wrap ul li");
    let cont = document.querySelectorAll(".pages");
    if (tab && cont) {
        for (let i = 0; i < tab.length; i++) {
            addClickEvent(i);
        }

        function addClickEvent(i) {
            tab[i].addEventListener('click', function() {
                setTabClass(i);
                setContClass(i);
            });
        }

        function setTabClass(e) {
            for (let i = 0; i < tab.length; i++) {
                tab[i].classList.remove('TabActive');
            }
            tab[e].classList.add('TabActive');
        }

        function setContClass(e) {
            for (let i = 0; i < cont.length; i++) {
                cont[i].classList.remove('ContActive');
            }
            cont[e].classList.add('ContActive');
        }
    }
}

function toggleContent() {
    // 獲取要顯示的元素
    var contents = document.querySelectorAll('.wrap .ContActive');
    var btn=document.querySelector(".toggleBtn");
    // 切換顯示/隱藏狀態
    contents.forEach(function(content) {
      if (content.style.maxHeight === '550px') {
        content.style.maxHeight = 'none'; // 移除最大高度限制
        btn.innerHTML="Undo";
      } else {
        content.style.maxHeight = '550px'; // 設定最大高度
        btn.innerHTML = "View More";
      }
    });
    
  }
  