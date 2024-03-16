<script setup>

function closeModal(){
  document.querySelector('.modal1').classList.remove('modal1-show')
  document.querySelector('.modal1').classList.add('modal1-hide')
}

</script>

<template>
  <section class="container">
    <div class="box">
      <div class="row row-cols-3 justify-content-around">
        <div class="col-3 neuro">
          <h5 class="">Lorem ipsum.</h5>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div class="col-3 neuro">
          <h5 class="">Lorem ipsum.</h5>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div class="col-3 neuro">
          <h5 class="">Lorem ipsum.</h5>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div class="col-3 neuro">
          <h5 class="">Lorem ipsum.</h5>
          <p>Lorem ipsum dolor sit.</p>
        </div>

      </div>
    </div>

   <div class="">
      <div class="modal1 modal1-show">
        <div class="modalhead">
          Info
          <div class="closebutton" @click="closeModal()">
            x
          </div>
        </div>
        <div class="modal-inner">
          Lorem ipsum dolor.
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped lang="scss">

// 모달창
.modal1{
  display: none;
  opacity: 0;
  padding: 20px 30px 30px 30px;
  position: absolute;
  width: 500px;
  height: 500px;
  margin:auto;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  color:white;
  background: rgba( 60,60,60, 0.35 );
  backdrop-filter: blur( 2px );
  -webkit-backdrop-filter: blur( 2px );
  border-radius: 10px;
  border: 1.5px solid rgba( 255, 255, 255, 0.18 );

  .modalhead{
    display: flex;
    padding: 10px;
    font-family: Tahoma,serif;
    font-weight: bold;
    border-bottom: 1px solid rgba(240,240,240,0.5);
    .closebutton{
      position: absolute;
      right:0;
      padding: 0 30px 0 10px;
    }
  }
  .modal-inner{
    padding: 10px;
  }
}
// 모달창 애니메이션
.modal1-show{
  display: block;
  opacity: 1;
  animation-name: show;
  animation-duration: 0.3s;
}@keyframes show {
   from{
     opacity: 0;
   } to{
       opacity: 1;
     }
 }
.modal1-hide{
  display: block;
  opacity: 0;
  z-index: -1;
  animation-name: hide;
  animation-duration: 0.3s;
} @keyframes hide {
    from{
      opacity: 1;
      z-index:  250;
    } to{
        opacity: 0;
        z-index:  -1;
      }
  }

.row{
  display: flex;
  align-items: center;
  flex-direction: row;
  //justify-content: space-evenly;
  gap: 30px;
}
  div{
    .neuro{
      padding: 15px;
      width: 160px;
      height:160px;
      border-radius: 30px;
      box-shadow:  10px 10px 20px #dfdfdf,
      -20px -20px 20px #ffffff;
      color: #555;
      transition: all 1s;
      &:hover{
        width: 165px;
        height:165px;
      }
    }

  }



</style>