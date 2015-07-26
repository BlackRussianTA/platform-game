<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="UI._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <h1>Heat Escape</h1>

    <div class="row" id="canvasContainer">
    </div>

    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-2 rating">Rate Us! </div>
        <asp:UpdatePanel runat="server">
            <Triggers>
                <asp:AsyncPostBackTrigger ControlID="Button_Rate" EventName="Click" />
            </Triggers>
            <ContentTemplate>
                <div class="col-md-2">
                    <asp:RadioButtonList runat="server" ID="Radio_rating" RepeatDirection="Horizontal" CssClass="radioList">
                        <asp:ListItem Value="1">
                        </asp:ListItem>
                        <asp:ListItem Value="2">
                        </asp:ListItem>
                        <asp:ListItem Value="3">
                        </asp:ListItem>
                        <asp:ListItem Value="4">
                        </asp:ListItem>
                        <asp:ListItem Value="5">
                        </asp:ListItem>
                    </asp:RadioButtonList>
                </div>
                <div class="col-md-1">
                    <asp:Button runat="server" ID="Button_Rate" Text=" Vote! " OnClick="Button_Rate_Click" CssClass="btn btn-primary" />
                </div>
                <div class="col-md-2">
                    <p class="row rating">
                        RATING: <%#: String.Format("{0:0.00}",this.rating )%>
                </div>
                <div class="col-md-2"></div>
            </ContentTemplate>
        </asp:UpdatePanel>
    </div>

    <div class="row">
        <div class="col-md-6">

            <asp:UpdatePanel runat="server">
                <ContentTemplate>
                    <p>
                        <div class="row">
                            <p>
                                <asp:Label runat="server" ID="Label_commentAdded" CssClass="alert alert-success" role="alert" Visible="false" Width="600px">
                        <span class="glyphicon glyphicon-ok" aria-hidden="true">&nbsp;</span>Comment added. Thank You!
                                </asp:Label>
                            </p>
                            <p>
                                <asp:Label runat="server" ID="Label_VoteAdded" CssClass="alert alert-success" role="alert" Visible="false" Width="600px">
                        <span class="glyphicon glyphicon-ok" aria-hidden="true">&nbsp;</span>Thank You for your vote!
                                </asp:Label>
                            </p>
                            <p>
                                <asp:Label runat="server" ID="Label_commentEmptyError" CssClass="alert alert-danger" role="alert" Visible="false" Width="600px">
                        <span class="glyphicon glyphicon-remove" aria-hidden="true">&nbsp;</span>Comment cannot be empty!
                                </asp:Label>
                            </p>
                        </div>
                    </p>

                    <div class="row">
                        <h2 style="background-color: #aaebd7; text-align: center">Comments</h2>
                    </div>

                    <p>
                        <div class="row">
                            <asp:Button runat="server" ID="Btn_addComment" Text="Add Comment" OnClick="Btn_addComment_Click" CssClass="btn btn-primary" Visible="true" />
                        </div>
                    </p>

                    <div class="row" runat="server" id="div_add"
                        style="border: 1px solid #ebebeb; padding: 5px" visible="false">
                        <h3 style="background-color: #aaebd7">Add New Comment</h3>
                        <div class="container">
                            <p>
                                <div class="row">
                                    <div class="col-md-3 badge">
                                        Comment: 
                                    </div>
                                    <div class="col-md-9">
                                        <asp:TextBox runat="server"
                                            ID="textbox_comment"
                                            placeholder="Enter comment here..."
                                            MaxLength="500"
                                            TextMode="MultiLine"
                                            Rows="5"
                                            Width="600"
                                            CssClass="form-control"></asp:TextBox>
                                    </div>
                                </div>
                            </p>
                            <p>
                                <div class="row">
                                    <div class="col-md-3 badge">
                                        Your name: 
                                    </div>
                                    <div class="col-md-9">
                                        <asp:TextBox runat="server"
                                            ID="textbox_owner"
                                            placeholder="Enter you name here..."
                                            MaxLength="100"
                                            Width="600"
                                            CssClass="form-control"></asp:TextBox>
                                    </div>
                                </div>
                            </p>
                        </div>

                        <p>
                            <asp:Button runat="server" ID="Btn_Add" Text="Add" CssClass="btn btn-success" OnClick="Btn_Add_Click" />
                            <asp:Button runat="server" ID="Btn_Cancel" Text="Cancel" CssClass="btn btn-danger" OnClick="Btn_Cancel_Click" />
                        </p>
                    </div>

                    <hr />
                    <h3>Latest comments</h3>
                    <hr />
                    <div class="row">
                        <asp:ListView runat="server"
                            ID="Listview_comments"
                            ItemType="Model.Comment"
                            SelectMethod="Listview_comments_GetData">
                            <ItemTemplate>
                                <p>
                                    <%#:Item.Text %>
                                </p>
                                <p style="background-color: #aaebd7;">
                                    by: "<i><%#: Item.Owner %></i>" created on: <%#: Item.DateCreated %>
                                </p>
                            </ItemTemplate>
                            <EmptyDataTemplate>No comments yet.</EmptyDataTemplate>
                            <ItemSeparatorTemplate>
                                <hr />
                            </ItemSeparatorTemplate>
                        </asp:ListView>
                    </div>

                </ContentTemplate>
            </asp:UpdatePanel>
        </div>

        <div class="col-md-1"></div>

        <div class="col-md-5">
            <div class="row">
                <h2 style="background-color: #aaebd7; text-align: center">High Score</h2>
            </div>
            <asp:UpdatePanel runat="server">
                <ContentTemplate>
                    <asp:GridView
                        runat="server"
                        ID="Grid_HighScore"
                        DataKeyNames="Id"
                        ItemType="Model.HighScore"
                        SelectMethod="Grid_HighScore_GetData"
                        AutoGenerateColumns="false"
                        AllowPaging="true"
                        PageSize="10"
                        CssClass="table table-hover table-striped">
                        <Columns>
                            <asp:BoundField DataField="Owner" HeaderText="Player Name" />
                            <asp:BoundField DataField="Points" HeaderText="Points" />
                        </Columns>
                    </asp:GridView>
                </ContentTemplate>
            </asp:UpdatePanel>
        </div>
    </div>
    <script src="Scripts/load_initial.js"></script>
</asp:Content>
