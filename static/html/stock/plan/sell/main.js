/**
 * Created by j on 18/7/5.
 */

brick.reg('planCtrl', function(){

    var scope = this;

   this.done = function(data){
       scope.render('a', data);
       $(this).remove();
   };

   scope.$elm.find('[ic-ajax]').icAjax();

});