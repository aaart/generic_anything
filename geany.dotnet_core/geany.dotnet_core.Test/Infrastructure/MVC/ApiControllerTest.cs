using FluentAssertions;
using geany.dotnet_core.Infrastructure.MVC;
using geany.dotnet_core.Infrastructure.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using Xunit;

namespace geany.dotnet_core.Test.Infrastructure.MVC
{
    public class ApiControllerTest
    {
        [Fact]
        public void should_set_exception_handled_when_context_contains_exception()
        {
            ApiController controller;
            ActionExecutedContext actionExecutedContext;
            Helpers.CreateControllerAndContext(out controller, out actionExecutedContext);
            actionExecutedContext.Exception = new Exception();
            
            controller.OnActionExecuted(actionExecutedContext);
            actionExecutedContext.ExceptionHandled.Should().BeTrue();
        }

        [Fact]
        public void should_has_ErroredServiceResponse_result_when_context_contains_exception()
        {
            ApiController controller;
            ActionExecutedContext actionExecutedContext;
            Helpers.CreateControllerAndContext(out controller, out actionExecutedContext);
            actionExecutedContext.Exception = new Exception();

            controller.OnActionExecuted(actionExecutedContext);
            actionExecutedContext.Result.As<JsonResult>().Value.Should().BeOfType<FromDescriptorErroredServiceResponse>(); ;
        }

        [Fact]
        public void should_contain_action_name_as_error_code_when_context_contains_exception()
        {
            ApiTestingController controller;
            ActionExecutedContext actionExecutedContext;
            Helpers.CreateControllerAndContext(out controller, out actionExecutedContext);
            actionExecutedContext.Exception = new Exception();
            actionExecutedContext.ActionDescriptor = new ControllerActionDescriptor { DisplayName = "TestingAction" };
            controller.OnActionExecuted(actionExecutedContext);
            actionExecutedContext.Result.As<JsonResult>().Value.As<FromDescriptorErroredServiceResponse>().Status.Should().Be("[TestingAction]");
        }
    }
}
