$(document).ready(function(){
	var give_message=infopad_init();

	$('form.order').live('submit',function(){
		var $this=$(this);
		var val=$this.children('input[name=amount]').val();
		var regex=new RegExp('^\\d{1,3}$');
		if (!regex.test(val)||parseInt(val)==0)
		{
			give_message('please give a valid amount');
			$this.children('input[name=amount]').focus();
			return false;
		}
		$.post($this.attr('action'),$this.serialize(),function(data){
			if (parseInt(data)==0) give_message('Your order have been added to your shopping cart');
		});
		return false;
	});
});
