package com.gamesecommerce.ecommerce.controllers;

import com.gamesecommerce.ecommerce.entities.Product;
import com.gamesecommerce.ecommerce.exception.ResourceNotFoundException;
import com.gamesecommerce.ecommerce.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import java.math.BigDecimal;
import java.util.List;

import javax.validation.Valid;

@RestController
@RequestMapping(value = "/api/v1")
public class ProductController {

    @Autowired
    private ProductRepository repository;


    @GetMapping("/product/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") Long id) throws ResourceNotFoundException {
        Product product = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product not found:: "+id));
        return ResponseEntity.ok().body(product);
    }

    @GetMapping("/product")
    @ResponseStatus(HttpStatus.OK)
    public List<Product> getAllJornadas() {
        return repository.findAll();
    }

    @PostMapping("/product")
    @ResponseStatus(HttpStatus.CREATED)
    public Product createProduct(@Valid @RequestBody Product product) {
        return repository.save(product);
    }

    @PostMapping("/product")
    @ResponseStatus(HttpStatus.CREATED)
    public Product createProductAll(@Valid @RequestBody List<Product> product) {
        return repository.saveAll(product);
    }

    @PutMapping("/product/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Product updateProduct(@PathVariable("id") Long id, @Valid @RequestBody Product jb) throws ResourceNotFoundException {
        Product product = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product not found:: "+id));

        product.setImage(jb.getImage());
        product.setName(jb.getName());
        product.setPrice(jb.getPrice());
        product.setScore(jb.getScore());

        return repository.save(product);
    }

    @DeleteMapping("/product/{id}")
    public ResponseEntity<Boolean> deleteProduct(@PathVariable Long id) {
        repository.deleteById(id);

        return ResponseEntity.accepted().body(true);
    }



}
