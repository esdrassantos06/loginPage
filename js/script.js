let password = document.getElementById('pwd');
      let toggler = document.getElementById('toggler');

      showHidePassword = () => {
        if (password.type == 'password') {
          password.setAttribute('type', 'text');
          document.getElementById('toggler').innerHTML='lock_open_right'

        } else {
            document.getElementById("toggler").innerHTML='lock';
            password.setAttribute('type', 'password');
        }
      };

      toggler.addEventListener('click', showHidePassword);