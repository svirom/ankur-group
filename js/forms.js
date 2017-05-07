$(document).ready(function() {

//contacts form
  $('#contacts_form').submit(send_form);
  $('#msg_form').submit(send_form);

  function send_form() {
    var t = $(this);
    var fields = '.required';
    event.preventDefault();
    t.find(fields).each(function() {
      if ($(this).val() == 0) {
        $(this).addClass('error');
      } else {
        $(this).removeClass('error');
      }
    });
    if (t.find('.error').length > 0) {
      return false;
    } else {
      var form_data = t.serialize();
      $.ajax({
        type: 'POST',
        url: 'sendmail.php',
        data: form_data,
        success: function() {
          alert("It's OK");
          t.find(fields).each(function() {
            $(this).val('');
          });
        },
        error: function() {
          alert("It's not OK");
        }

      });
    }
    return false;
  }


  //sale form
  $('#aircraft_form').submit(air_send_form);
  $('#helicopter_form').submit(air_send_form);

  function air_send_form() {
    var $this = $(this);
    var fields = '.required';
    event.preventDefault();
    $this.find(fields).each(function() {
      if ($(this).val() == 0) {
        $(this).addClass('error');
      } else {
        $(this).removeClass('error');
      }
    });
    if ($this.find('.error').length > 0) {
      return false;
    } else {
      var form_data = $this.serialize();
      $.ajax({
        type: 'POST',
        url: 'sendmail_sale.php',
        data: form_data,
        success: function() {
          alert("It's OK");
          $this.find(fields).each(function() {
            $(this).val('');
          });
          $this.find('input:not([type="submit"])').each(function(){
          	$(this).val('');
          });
        },
        error: function() {
          alert("It's not OK");
        }

      });
    }
    return false;
  }

})