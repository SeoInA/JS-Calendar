// var assert = require('assert');

describe('Utility.js 테스트 - Jin', function() {
    before(function() {
        // before suite
    });
    after(function() {
        // after suite
    });
    beforeEach(function() {
        // before test
    });
    afterEach(function() {
        // after test
    });
    describe('#padZero 테스트', function() {
        it('한자리 달과 length 2를 넣으면 앞에 0이 붙어서 출력되어야한다.', function(done) {
            for(var i=1; i<=9; i++) {
                var result = Utility.padZero(i, 2);
                if(result !== "0"+i) {
                    throw Error(i+'를 넣었는데'+ result+'가 나온다.');
                }
            }
            done();
        });
        it('두자리 달과 length 2를 넣으면 숫자 그대로 출력되어야한다.', function(done) {
            for(var i=10; i<=12; i++) {
                var result = Utility.padZero(i, 2);
                if(result !== ""+i) {
                    throw Error(i+'를 넣었는데'+ result+'가 나온다.');
                }
            }
            done();
        });
    });
    describe('#addClass 테스트', function() {
        it('element와 class 이름을 넣으면 해당 element에 class가 들어가야한다.', function(done) {
            var ele = document.createElement('div');
            var name = "my-class";
            Utility.addClass(ele, name);
            if(ele.classList.contains(name)) done();
            else throw Error(ele+'가 '+name+'을 가지고 있지 않다.');
        });
    });
    describe('#setTimeByGMT 테스트', function() {
        it('date를 넣으면 GMT시간으로 바뀐 날짜가 출력되어야한다.', function(done) {
            var date = new Date();
            var result = Utility.setTimeByGMT(date);

            var originer = date.getHours();
            var change = result.getHours();
            if(originer + 9 === change) done();
            else throw Error('변환이 제대로 되지 않았다.');
        });
    });
    describe('#setTimeDefault 테스트', function() {
        it('date객체와 type 0 을 넣으면 00:00:00으로 시간이 바뀌어야한다.', function(done) {
            var date = new Date();
            Utility.setTimeDefault(date, 0);
            if(date.getHours() === 0 && date.getMinutes() === 0 && date.getSeconds() === 0) done();
            else throw Error(date + ' -> 시간이 00:00:00으로 바뀌지 않았습니다.');
        });
        it('date객체와 type 9 를 넣으면 23:59:59로 시간이 바뀌어야한다.', function(done) {
            var date = new Date();
            Utility.setTimeDefault(date, 9);
            if(date.getHours() === 23 && date.getMinutes() === 59 && date.getSeconds() === 59) done();
            else throw Error(date + ' -> 시간이 00:00:00으로 바뀌지 않았습니다.');
        });
    });

    describe('element display 테스트', function() {
      it('#hideElement 실행 시 display 속성이 none이 되어야 한다.', function(done) {
        ele = _$('#box');
        Utility.hideElement(ele);
        if (ele.style.display === "none") done();
        else throw Error('display is visible');
      });
      it('#showElement 실행 시 display 속성이 block이 되어야 한다.', function(done) {
        ele = _$('#box');
        Utility.showElement(ele);
        if (ele.style.display === "block") done();
        else throw Error('display is not block');
      });
    });
});
