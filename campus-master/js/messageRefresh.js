	
	
	
	 var myScroll, pullDownEl, pullDownOffset, generatedCount = 0;

    //����ˢ�� 
    // myScroll.refresh();		
	// ���ݼ�����ɺ󣬵��ý�����·���
    //bang//
	/*ʵ��ϵͳ��Ϣ����������*/
	function pullDownAction_zw03(){
		 setTimeout(function() {
            var content = ""
            for (var i = 1; i < 3; i++) {
                content = content + "<li data-icon=\"false\">";
                content = content + "<a href=\"#\" >";
                content = content + "<div class=\"ui-grid-b\">";
                content = content + "<div class=\"ui-block-a\">";
                content = content + "<h2><font color=\"green\">[˽��]</font>XXX����������</h2>"
                content = content + "</div>";
				content = content + "<div class=\"ui-block-c\">";
				content = content + "<h4><font size=\"1px\">2Сʱǰ</font></h4>";
				content = content + "</div>";
                content = content + "</div>";
                content = content + "<textarea disabled=\"disabled\">����������</textarea>";
				content = content + "</li></a>";
            }
            $("#message").prepend(content).listview('refresh');
			window.plugins.SimplePlugin.test("test",function(result) {	//�ɹ�ʱִ�У��������Javascript�ж��󷽷��Ĳ���
			//output.innerHTML = result;//�������ĵ����ݵ�������ʾ�����div��
			alert("�ص��ɹ�");
            }, function(err) {						//����ʱִ��
                // failure callback
                //output.innerHTML = 'err: ' + err  + ', Failed to invoke simple plugin';
				alert("Ϊ���ʧ���أ�");
            });
            myScroll.refresh(); //���ݼ�����ɺ󣬵��ý�����·���
        },1000);}

    // ��ʼ��iScroll�ؼ�
    function loaded_zw02() {
        if (myScroll != null) {
            myScroll.destroy();
        }
        pullDownEl = document.getElementById('pullDown');
        pullDownOffset = pullDownEl.offsetHeight;


        myScroll = new iScroll('MwrapperContent', {
            // ��Ҫ��ʽ
            useTransition: false,
			checkDOMChange: false,
				scrollbarClass: 'myScrollbar',
				hScrollbar: false,		// ���ع�����
				vScrollbar: false,
				
            topOffset: pullDownOffset,           
            onScrollMove: function() {
                if (this.y > 5 && !pullDownEl.className.match('flip')) {
                    pullDownEl.className = 'flip';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = '���ֿ�ʼ����...';
                    this.minScrollY = 0;
                } 
                
            },
            onScrollEnd: function() {
                if (pullDownEl.className.match('flip')) {
                    pullDownEl.className = 'loading';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = '������...';
                    pullDownAction_zw03(); // Execute custom function (ajax call?)
				
                } 
            }
        });

        setTimeout(function() {
            document.getElementById('MwrapperContent').style.left = '0';
        },0);
    }
	
	//ҳ���������ʾִ�д���-------------------------
	$("#message").live("pagebeforeshow", function(){
		setTimeout(loaded_zw02, 200);
		setTimeout(function() {myScroll.refresh()}, 1000);
		//setTimeout(myScroll.refresh(), 800);
	});
	//ҳ�����ʾʱִ�д���-------------------------
	$("#message").on("pageshow",function() {
		
	});