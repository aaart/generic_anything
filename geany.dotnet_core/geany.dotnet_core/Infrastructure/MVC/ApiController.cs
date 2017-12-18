using geany.dotnet_core.Infrastructure.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace geany.dotnet_core.Infrastructure.MVC
{
    public class ApiController : Controller
    {

        public override void OnActionExecuted(ActionExecutedContext context)
        {
            base.OnActionExecuted(context);
            if (context.Exception != null)
            {
                // sth here
                context.Result = new JsonResult(new FromDescriptorErroredServiceResponse(context.ActionDescriptor));
                context.ExceptionHandled = true;
            }
        }

    }
}
