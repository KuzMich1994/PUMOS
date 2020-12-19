;$(document).ready(function() {
  var options = ['counter', 'stand', 'product'];

  /* calculator START */
  ;(function() {
    var $products = $('.product__pay');

    if ($products.length === 0) {
      return;
    }
  
    var priceToString = function(price) {
      var stringPrice = String(price);
      if (stringPrice.length <= 3) {
        return stringPrice;
      }
      var firstNumber = stringPrice.slice(0,-3);
      var lastNumbers = stringPrice.slice(-3);
    
      return firstNumber + ' ' + lastNumbers;
    };
  
    var updateInfo = function($product, basePrice) {
      var newPrice = basePrice;
      var $productBtn = $product.find('.product__pay-button');
  
      $product.find('[type="checkbox"]').each((index, item) => {
        var $checkbox = $(item);
        
        if (!$checkbox.hasClass('counter') && !$checkbox.hasClass('stand')) {
          return;
        }
  
        var name = $checkbox.attr('name');
        if (name) {
          $productBtn.attr('data-' + name, 'добавить');
        }
  
        if (!$checkbox.is(':checked')) {
          $productBtn.attr('data-' + name, '');
          return;
        }
  
        var value = Number($checkbox.val());
        newPrice += value;
      });
    
      $product.find('.product__pay-pricetag').text(priceToString(newPrice));
    };
  
    $products.each((index, item) => {
      var $product = $(item);
      var $price = $product.find('.product__pay-pricetag');
      var $productCounter = $product.find('.counter');
      var $productStand = $product.find('.stand');
      var basePrice = Number($price.text().replace(' ', ''));
  
      $productCounter.on('input', function(e) {
        updateInfo($product, basePrice);
      });
    
      $productStand.on('input', function() {
        updateInfo($product, basePrice);
      });
    });
  })();
  /* calculator END */


  /* product settings for popup START */
  ;(function() {
    var $productOrder = $('.modal-order-product');

    var popupClearFields = function() {
      for (var optionsCounter = 0; optionsCounter < options.length; optionsCounter += 1) {
        var option = options[optionsCounter];
        $productOrder.find('[name="' + option + '"]').val('');
      }
    };

    $('.product__pay-button, .catalog__button').on('click', function(e) {
      const $currentTarget = $(e.currentTarget);
      popupClearFields();

      for (var optionsCounter = 0; optionsCounter < options.length; optionsCounter += 1) {
        var option = options[optionsCounter];
        var targetData = $currentTarget.attr('data-' + option);

        if (targetData) {
          $productOrder.find('[name="' + option + '"]').val(targetData);
        }
      }


      
    });
  })();
  /* product settings for popup END */
});
