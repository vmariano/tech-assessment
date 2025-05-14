class OrdersMailer < ApplicationMailer
  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.orders_mailer.order_created_email.subject
  def order_created_email
    order = params[:order]

    @id = order.id
    @name = order.name
    @description  = order.description
    mail to: "to@example.org"
  end
end
