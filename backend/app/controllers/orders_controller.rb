class OrdersController < ApplicationController

  # @return all available orders
  def index
    @orders = Order.all
    render json: @orders
  end


  def create
    @order = Order.create(orders_params)
    if @order.save
      render json: @order
    else
      render json: { errors: @order.errors.full_messages }, status: 422
    end
  end

  private

  def orders_params
    params.require(:order).permit(:name, :order_description)
  end
end
