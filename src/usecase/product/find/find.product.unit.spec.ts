import Product from "../../../domain/product/entity/product";
import FindProductUseCase from "./find.product.usecase";

const product = new Product("123","Product 1",100);

const MockRepository = () =>{
    return{
        find: jest.fn().mockReturnValue(Promise.resolve(product)),
        findAll: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
    };
};

describe("Test find a product use case", ()=>{

    it("Should find a product", async ()=>{

        const productRepository = MockRepository();
        const usecase = new FindProductUseCase(productRepository);
        
        const input = {
            id: "123"
        };
        
        const output = {
            id: "123",
            name: "Product 1",
            price: 100,
        }

        const result = await usecase.execute(input);
        
        expect(result).toEqual(output);

    });

});