class UserMailer < ApplicationMailer
  default from: 'noreply@jungle.com'

  def order_confirmation_email(order)
    @order = order  #to have access to order object
    mail(to: @order.email, subject: order.id)
  end

end
