package com.example.demo.lectureClass.testCode.product.Service;

import com.example.demo.lectureClass.testCode.product.controller.form.TestProductRequestForm;
import com.example.demo.lectureClass.testCode.product.entity.TestProduct;

public interface TestProductService {
    TestProduct register (TestProductRequestForm requestForm);
}
