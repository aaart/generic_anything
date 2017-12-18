using geany.dotnet_core.Infrastructure.Service;
using geany.dotnet_core.Infrastructure.Service.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;

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
            else if (context.Result is ObjectResult)
            {
                var res = (ObjectResult)context.Result;
                var rawResponse = res.Value;
                var responseType = typeof(ServiceResponse<>).MakeGenericType(res.Value.GetType());
                var responseObject = Activator.CreateInstance(responseType);
                responseType.GetProperty("Data").GetSetMethod().Invoke(responseObject, new[] { rawResponse });
                res.Value = responseObject;
            }
            else if (context.Result is EmptyResult)
            {
                context.Result = new ObjectResult(new ServiceResponse());
            }
            else
            {
                throw new NotImplementedException($"{context.Result.GetType().Name} is not implemented case!");
            }
        }

    }
}
