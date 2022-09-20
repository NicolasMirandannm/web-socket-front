<template>
  <div class="home">
    <div class="panel">
      <div class="password">
        {{password}}
      </div>
    </div>
  </div>
</template>

<script>
import { io } from 'socket.io-client';

export default {
  data() {
    return {
      password: ''
    }
  },
  created() {
    const socket = io('http://localhost:3000');
    
    socket.on('connection', (data) => console.log(data));
    socket.on('attendanceCall', (data) => {
      console.log(data.password)
      this.password = data.password
    });

  }
}

</script>

<style scoped>

* {
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.panel {
  height: 150px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(224, 215, 215);
  
}
</style>