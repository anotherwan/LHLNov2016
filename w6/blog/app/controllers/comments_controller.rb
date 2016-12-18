class CommentsController < ApplicationController
  http_basic_authenticate_with name: "dhh", password: "secret", only: :destroy

  def create
    @article = Article.find(params[:article_id])    #find method of the Article model to get article in question
    @comment = @article.comments.create(comment_params) #used create method on @article.comments to create and save comment. automatically link comment to belong to that particular article
    redirect_to article_path(@article)  #send user back to original article once new comment made. this calls the show action which renders show.html.erb (where comment will show)
  end

  def destroy
    @article = Article.find(params[:article_id])
    @comment = @article.comments.find(params[:id])
    @comment.destroy
    redirect_to article_path(@article)
  end

  private
    def comment_params
      params.require(:comment).permit(:commenter, :body)
    end
end
