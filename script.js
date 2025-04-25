// script.js

function login(role) {
    switch (role) {
      case 'manager':
        alert("Login sebagai Manajer QC");
        // redirect ke halaman manajer
        window.location.href = 'login.html';
        break;
      case 'qc':
        alert("Login sebagai Tim QC");
        window.location.href = 'login.html';
        break;
      case 'produksi':
        alert("Login sebagai Tim Produksi");
        window.location.href = 'login.html';
        break;
      default:
        alert("Peran tidak dikenali");
    }
  }
  