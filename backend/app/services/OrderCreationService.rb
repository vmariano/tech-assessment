
class OrderCreationService

  def initialize(order)
    @order = order
  end

  def call
    return false unless @order.save
    send_order_create_email
    true
  end


  private

  def send_order_create_email
    OrdersMailer.with(order: @order).order_created_email.deliver_later
  end

end