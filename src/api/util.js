
const _p = {}

var _isTypeOf = function(_data,_type){
    try{
        _type = _type.toLowerCase();
        if (_data===null) return _type=='null';
        if (_data===undefined) return _type=='undefined';
        return {}.toString.call(_data).toLowerCase()=='[object '+_type+']';
    }catch(e){
        return !1;
    }
};

_p.isToday = function(value) {
    var now = new Date();
    return now.toDateString() === new Date(value).toDateString()
}

_p.isYesterday = function(value) {
    var now = new Date();
    var yesterdayString = new Date(now.setDate(now.getDate() - 1)).toDateString();
    return new Date(value).toDateString() === yesterdayString;
}

_p._$isDate = function(_data){
    return _isTypeOf(_data,'date');
}

_p._$isString = function(_data){
    return _isTypeOf(_data,'string');
}

_p._$var2date = function(_time){
    var _date = _time;
    if (_p._$isString(_time)){
        _date = new Date(
            _h.__str2time(_time)
        );
    }
    if (!_p._$isDate(_date)){
        _date = new Date(_time);
    }
    return _date;
}

_p._$encode = function(_map,_content) {
    _content = ''+_content;
    if (!_map||!_content){
        return _content||'';
    }
    return _content.replace(_map.r,function($1){
        var _result = _map[!_map.i?$1.toLowerCase():$1];
        return _result!=null?_result:$1;
    });
}

_p._$format = (function(){
    var _map = {i:!0,r:/\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g},
        _12cc = ['上午','下午'],
        _12ec = ['A.M.','P.M.'],
        _week = ['日','一','二','三','四','五','六'],
        _cmon = ['一','二','三','四','五','六','七','八','九','十','十一','十二'],
        _emon = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
    var _fmtnmb = function(_number){
        _number = parseInt(_number)||0;
        return (_number<10?'0':'')+_number;
    };
    var _fmtclc = function(_hour){
        return _hour<12?0:1;
    };
    return function(_time,_format,_12time){
        if (!_time||!_format)
            return '';
        _time = _p._$var2date(_time);
        _map.yyyy = _time.getFullYear();
        _map.yy   = (''+_map.yyyy).substr(2);
        _map.M    = _time.getMonth()+1;
        _map.MM   = _fmtnmb(_map.M);
        _map.eM   = _emon[_map.M-1];
        _map.cM   = _cmon[_map.M-1];
        _map.d    = _time.getDate();
        _map.dd   = _fmtnmb(_map.d);
        _map.H    = _time.getHours();
        _map.HH   = _fmtnmb(_map.H);
        _map.m    = _time.getMinutes();
        _map.mm   = _fmtnmb(_map.m);
        _map.s    = _time.getSeconds();
        _map.ss   = _fmtnmb(_map.s);
        _map.ms   = _time.getMilliseconds();
        _map.w    = _week[_time.getDay()];
        var _cc   = _fmtclc(_map.H);
        _map.ct   = _12cc[_cc];
        _map.et   = _12ec[_cc];
        if (!!_12time){
            _map.H = _map.H%12;
        }
        return _p._$encode(_map,_format);
    };
})();

_p._$uniqueID = (function(){
    var _seed = +new Date;
    return function(){
        return ''+(_seed++);
    };
})();

_p.formatTime = function(value, type) {
  var now = new Date();
  if(type === 'today') return _p._$format(value, 'HH:mm');
  if (now.toDateString() === new Date(value).toDateString()) {
    return '今天 ' + _p._$format(value, 'HH:mm');
  }
  if (_p.isYesterday(value)) {
    return '昨天 ' + _p._$format(value, 'HH:mm');
  }

  return _p._$format(value, 'MM/dd HH:mm');
}

export default _p