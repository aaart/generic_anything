using geany.dotnet_core.Infrastructure.MVC;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Routing;
using System.Collections.Generic;

namespace geany.dotnet_core.Test.Infrastructure.MVC
{
    public static class Helpers
    {
        public static void CreateControllerAndContext(out ApiController controller, out ActionExecutedContext context)
        {
            CreateControllerAndContext<ApiController>(out controller, out context);
        }

        public static void CreateControllerAndContext<TController>(out TController controller, out ActionExecutedContext context)
            where TController: ApiController, new()
        {
            var actionContext = new ActionContext
            {
                HttpContext = new DefaultHttpContext(),
                RouteData = new RouteData(),
                ActionDescriptor = new ControllerActionDescriptor()
            };
            var controllerContext = new ControllerContext(actionContext);
            controller = new TController { ControllerContext = controllerContext };
            context = new ActionExecutedContext(actionContext, new List<IFilterMetadata>(), controller);
        }
    }
}
