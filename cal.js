	var a;
	var op;
	var al="";

	function all_back()
	{
		document.getElementById('r').innerHTML="";
	}
	function back()
	{
	document.getElementById('n1').value=al;
	}
	function one(p)
	{
      var s=document.getElementById('n1').value;
      if(s=="")
      {
      	document.getElementById('n1').value=p;
      }
      else
      {
      	s=parseInt(s);
      	s=s*10+p;
      	document.getElementById('n1').value=s;
      }
	}
	function add(t)
	{
	   op=t;
	   var n1=document.getElementById('n1').value;
	   a=parseInt(n1);
	   document.getElementById('r').innerHTML=a+"+";
	   document.getElementById('n1').value="";

	}
	function sub(t)
	{
		op=t;
		var n1=document.getElementById('n1').value;
		a=parseInt(n1);
		document.getElementById('r').innerHTML=a+"-";
		document.getElementById('n1').value="";
	}
	function div(t)
	{
		op=t;
		var n1=document.getElementById('n1').value;
		a=parseInt(n1);
		document.getElementById('n1').value="";
		document.getElementById('r').innerHTML=a+"/";
	}
	function mult(t)
	{
		op=t;
		var n1=document.getElementById('n1').value;
		a=parseInt(n1);
		document.getElementById('n1').value="";
		document.getElementById('r').innerHTML=a+"*";
	}
	function sin(t)
	{
		op=t;
		a=parseInt(n1);
		var n1=document.getElementById('n1').value;
		document.getElementById('r').innerHTML=a+"sin";
		document.getElementById('n1').value="";
		
	}
	function cos(t)
	{
		op=t;
		var n1=document.getElementById('n1').value;
		a=parseInt(n1);
		document.getElementById('r').innerHTML=a+"cos";
		document.getElementById('n1').value="";
		
	}
	function tan(t)
	{
		op=t;
		var n1=document.getElementById('n1').value;
		a=parseInt(n1);
		document.getElementById('r').innerHTML=a+"tan";
		document.getElementById('n1').value="";
		
	}
	function par(t)
	{
		op=t;
		var n1=document.getElementById('n1').value;
		a=parseInt(n1);
		document.getElementById('r').innerHTML=a+"%";
		document.getElementById('n1').value="";
		
	}
	function log(t)
	{
		op=t;
		var n1=document.getElementById('n1').value;
		a=parseInt(n1);
		document.getElementById('r').innerHTML=a+"log";
		document.getElementById('n1').value="";
		
	}
	function xsqr(t)
	{
		op=t;
		a=parseInt(n1);
		var n1=document.getElementById('n1').value;
		document.getElementById('r').innerHTML=a+"X2";
		document.getElementById('n1').value="";
		
	}
	function root(t)
	{
		op=t;
		a=parseInt(n1);
		var n1=document.getElementById('n1').value;
		document.getElementById('r').innerHTML=a+")``";
		document.getElementById('n1').value="";
		
	}
	function result()
	{
		var b;
		var n1=document.getElementById('n1').value;
		b=parseInt(n1);
		switch(op)
		{
			case '+':
			document.getElementById('n1').value=a+b;
			 document.getElementById('r').innerHTML=a+op+b+"="+(a+b);
			 al=al+a+"+"+b+"="+(a+b);
			 break;
		}
		switch(op)
		{
			case '-':
			document.getElementById('n1').value=a-b;
			 document.getElementById('r').innerHTML=a+op+b+"="+(a-b);
			 al=al+a+"-"+b+"="+(a-b);
			 break;
		}
		switch(op)
		{
			case '*':
			document.getElementById('n1').value=a*b;
			document.getElementById('r').innerHTML=a+op+b+"="+(a*b);
			 al=al+a+"*"+b+"="+(a*b);
			 break;
		}
		switch(op)
		{
			case '/':
			document.getElementById('n1').value=a/b;
			 document.getElementById('r').innerHTML=a+op+b+"="+(a/b);
			 al=al+a+"/"+b+"="+(a/b);
			 break;
		}
		switch(op)
		{
			case '%':
			c=a*(b/100);
			document.getElementById('n1').value=c;
			 document.getElementById('r').innerHTML=a+op+b+"="+(c);
			 al=al+a+"%"+b+"="+(a.b.c);
			 break;
	    }
		switch(op)
		{
			
			case 'sin':
              c= Math.sin(b);
			document.getElementById('n1').value=c;
			 document.getElementById('r').innerHTML=a+op+b+"="+(c);
			 al=al+a+"sin"+b+"="+(c);
			 break;
	    }
		switch(op)
		{
			case 'cos':
              c= Math.cos(b);
			document.getElementById('n1').value=c;
			 document.getElementById('r').innerHTML=a+op+b+"="+(c);
			 al=al+a+"cos"+b+"="+(c);
			 break;
	    }
	    switch(op)
		{
			case 'tan':
             c= Math.tan(b);
			document.getElementById('n1').value=a;
			 document.getElementById('r').innerHTML=a+op+b+"="+(c);
			 al=al+a+"tan"+b+"="+(b);
			 break;
	    }
	    switch(op)
		{
			case 'log':
             c= Math.log(b);
			document.getElementById('n1').value=a;
			 document.getElementById('r').innerHTML=a+op+b+"="+(c);
			 al=al+a+"log"+b+"="+(b);
			 break;
	    }
	    switch(op)
		{
			case 'X2':
			c=Math.pow(b,2);
			document.getElementById('n1').value=a;
			 document.getElementById('r').innerHTML=a+op+b+"="+(c);
			 al=al+a+"X2"+b+"="+(a);
			 break;
	    }
	     switch(op)
		{
			case ')``':
			c=Math.sqrt(b);
			document.getElementById('n1').value=a;
			 document.getElementById('r').innerHTML=a+op+b+"="+(c);
			 al=al+a+")``"+b+"="+(a);
			 break;
	    }
    }