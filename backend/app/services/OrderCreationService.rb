
class OrderCreationService

  def initialize
    @params = params
    @order = Order.new
  end


  def call
    return false unless @order.save
  end

end